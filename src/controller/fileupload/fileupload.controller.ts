import { Controller, Get, Param, Post, Req, Res, StreamableFile, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RoutesConstant } from 'src/constant/routes.contact';
import{diskStorage} from "multer"
import { Response } from 'express';
import { createReadStream } from 'fs';

@Controller()
export class FileuploadController {
    @Post(RoutesConstant.FILEUPLOAD)
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: "./uploads",
            filename: (req, file, cb) => {
                cb(null, `${file.originalname}`)
            }
        })
    }))
    fileUpload(@UploadedFile() file) {
        return file.path
    }
    @Get(RoutesConstant.OPENFILE)
    async getFile(@Param('filename') filename: string, @Res() response: Response) {
        response.sendFile(filename, {
            root: './uploads'
        })
    }
    @Get(RoutesConstant.DOWNLOADFILE)
    async downloadFile(@Param('filename') filename: string, @Res() res: Response) {
        // Set the appropriate headers for the download
        res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
        res.sendFile(filename, { root: './uploads' }); // Specify the folder where files are stored
      }

}