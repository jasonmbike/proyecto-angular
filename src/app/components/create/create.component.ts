import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router:Router
  ) {
    this.title = "Crear Proyecto";
    this.project = new Project('', '', '', '', 2023, '', '');
    this.url = global.url
  }

  ngOnInit(){
  	this._route.params.subscribe(params => {
  		let id = params['id'];

  		this.getProject(id);
  	});
  }

  getProject(id:any){
  	this._projectService.getProject(id).subscribe(
  		response => {
  			this.project = response.project;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }

  onSubmit(form: any) {
    // Guardar los datos del formulario
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (response.project) {
          // Subir imagen
          this._uploadService.makeFileRequest(
            global.url + "upload-image/" + response.project._id,
            [],
            this.filesToUpload,
            'image'
          ).then((result: any) => {
            console.log("save_project:", result.project);
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
