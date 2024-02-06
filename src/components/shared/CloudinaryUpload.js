import { cloudinary_upload_preset } from "../../config";
import {openUploadWidget} from "../../utils/CloudinaryServices";


const CloudinaryUpload = ({setUrl, setName}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "dj0lucyq5",
                uploadPreset: cloudinary_upload_preset ,
                sources: ["local"],
            },
            function (error, result) {
                if (!error && result.event === "success") {
                    setUrl(result.info.secure_url);
                    setName(result.info.original_filename);
                    // console.log(result.info);
                } else {
                    if (error) {
                        console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button
            className="bg-white text-black  rounded-full p-4 font-semibold"
            onClick={uploadImageWidget}
        >
            Select track
        </button>
    );
};

export default CloudinaryUpload;