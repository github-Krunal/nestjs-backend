import { Body, Controller, Get, HttpStatus, Param, Post, Req, Res, StreamableFile, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RoutesConstant } from 'src/constant/routes.contact';
import{diskStorage} from "multer"
import { Response } from 'express';
import { createReadStream, unlink, unlinkSync } from 'fs';

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
        return { status: HttpStatus.OK, url:file.path }
    }
    @Get(RoutesConstant.OPENFILE)
    async getFile(@Param('filename') filename: string, @Res() response: Response) {
        response.sendFile(filename, {
            root: './uploads'
        })
    }
    @Get(RoutesConstant.DOWNLOADFILE)
    async downloadFile(@Param('filename') filename: string, @Res() res: Response) {
        res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
        res.sendFile(filename, { root: './uploads' }); 
      }
      @Post(RoutesConstant.DELETEFILE)
      async deleteFile(@Param('filename') filename: string) {
          unlinkSync(`./uploads/${filename}`)
    return true
        }
}
