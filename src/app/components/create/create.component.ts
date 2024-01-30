import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [ProjectService, UploadService]
})
export class CreateComponent {

  public title: string;
  public project: Project;
  public save_project:any;
  public status: string = "";
  public filesToUpload: Array<File> = [];

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = "Crear Proyecto";
    this.project = new Project('', '', '', '', 2023, '', '');
  }

  onSubmit(form: any) {

    // Guardar los datos del formulario
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (response.project) {
          // Subir imagen
          this._uploadService.makeFileRequest(
            global.url + "upload-image/" + response.project._id,
            [], // No parece que necesites parámetros adicionales aquí
            this.filesToUpload,
            'image'
          ).then((result: any) => {
            this.save_project = result.project;
            this.status = 'success';
            form.reset();
          }).catch((error) => {
            console.error(error);
            this.status = 'failed';
          });
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.error(error);
        alert(error);
      }
    );
  }
  
    fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
    }

  }
