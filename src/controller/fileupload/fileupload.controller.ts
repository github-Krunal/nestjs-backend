import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RoutesConstant } from 'src/constant/routes.contact';
import{diskStorage} from "multer"
import { Response } from 'express';

@Controller()
export class FileuploadController {
   @Post(RoutesConstant.FILEUPLOAD)
   @UseInterceptors(FileInterceptor('file',{
    storage:diskStorage({
        destination:"./uploads",
        filename:(req,file,cb)=>{
            cb(null,`${file.originalname}`)
        }
    })
   }))
   fileUpload(@UploadedFile() file){
    return file.path
   }

   @Get(RoutesConstant.OPENFILE)
   async getFile(@Param('filename') filename: string, @Res() response: Response) {
    console.log(filename);
    
       response.sendFile(filename, {
           root: './uploads'
       })
   }

}
