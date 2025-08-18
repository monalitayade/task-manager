import React,{useState, useRef} from 'react'
import { BreadCrumb } from 'primereact/breadcrumb';
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';      
import { Button } from 'primereact/button'; 
import { MultiSelect } from 'primereact/multiselect';
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';
import { Tooltip } from 'primereact/tooltip';
import { ProgressBar } from 'primereact/progressbar';
import { Tag } from 'primereact/tag';

const AddUser = () => {
    const items = [{ label: 'Add User'}];
    const home = { label: 'Home', url: '/add-user' }

    const [value, setValue] = useState('');
    const [date, setDate] = useState(null);

    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const toast = useRef(null);
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef(null);

    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        let files = e.files;

        Object.keys(files).forEach((key) => {
            _totalSize += files[key].size || 0;
        });

        setTotalSize(_totalSize);
    };

    const onTemplateUpload = (e) => {
        let _totalSize = 0;

        e.files.forEach((file) => {
            _totalSize += file.size || 0;
        });

        setTotalSize(_totalSize);
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const onTemplateRemove = (file, callback) => {
        setTotalSize(totalSize - file.size);
        callback();
    };

    const onTemplateClear = () => {
        setTotalSize(0);
    };

    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize / 10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                {/* <div className="flex align-items-center gap-3 ml-auto">
                    <span>{formatedValue} / 1 MB</span>
                    <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
                </div> */}
            </div>
        );
    };

    const itemTemplate = (file, props) => {
        return (
            <div className="flex flex-column align-items-center flex-wrap">
                 <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
                <div className="flex flex-column align-items-center" style={{ width: '40%' }}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
               
            </div>
        );
    };

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
                    Drag and Drop Image Here
                </span>
            </div>
        );
    };

    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };
  return (
    <div className='w-full flex flex-column p-0 md:p-0'>
      <BreadCrumb model={items} home={home} className='w-full border-transparent bg-transparent pl-0 pt-0'/>
      <div className='w-full flex flex-column-reverse md:flex-row gap-4 '>
        <Card title="Create User" className='w-full p-3'>
            <div className="w-full grid m-0">
                <div className="col-12 md:col-6 flex flex-column ">
                    <label htmlFor="projectitle" className='font-semibold mb-1'>First Name</label>
                    <InputText id="projectitle" aria-describedby="projectitle" className='p-2'/>
                    <small id="projectitle" className='mt-1'>
                        Enter your username to reset your password.
                    </small>
                </div>
                <div className="col-12 md:col-6 flex flex-column  ">
                    <label htmlFor="projecttype" className='font-semibold mb-1'>Last Name</label>
                    <InputText id="projecttype" aria-describedby="projecttype" className='p-2'/>
                    <small id="projecttype" className='mt-1'>
                        Enter your username to reset your password.
                    </small>
                </div>
                <div className="col-12 md:col-6 flex flex-column  ">
                    <label htmlFor="buttondisplay" className="font-semibold mb-1">
                        Phone No.
                    </label>
                    <InputText id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon/>
                </div>
                <div className="col-12 md:col-6 flex flex-column  ">
                    <label htmlFor="buttondisplay" className="font-semibold mb-1">
                    Created Date
                    </label>
                    <Calendar id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon/>
                </div>
                <div className="col-12 md:col-6 flex flex-column md:flex-row p-0">
                    <div className="col-12 w-full flex flex-column">
                        <label htmlFor="buttondisplay" className="font-semibold mb-1">
                            Designation:
                        </label>
                        <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options=   {cities}       optionLabel="name" 
                        placeholder="Select Cities" maxSelectedLabels={3} className="w-full" />
                    </div>
                    
                    <div className="col-12 w-full flex flex-column">
                        <label htmlFor="buttondisplay" className="font-semibold mb-1">
                            Department:
                        </label>
                        <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options=   {cities}       optionLabel="name" 
                        placeholder="Select Cities" className="w-full" />
                    </div>
                </div>
                <div className="col-12 flex justify-content-end flex-wrap gap-4">
                    <Button label="Create" />
                    <Button label="Delete" outlined />
                </div>
            </div>            
        </Card>
        <Card title="Upload picture" className='w-full p-3'>
            <div className='w-full'>
                <Toast ref={toast}></Toast>
                <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
                <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
                <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />
                <FileUpload ref={fileUploadRef} name="demo[]" url="/api/upload" multiple accept="image/*" maxFileSize={1000000}
                    onUpload={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
                    headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                    chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />
            </div>    
        </Card>
        </div>
    </div>
  )
}

export default AddUser
