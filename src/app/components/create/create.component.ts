import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [ProjectService]
})
export class CreateComponent {

  public title: string;
  public project: Project;
  public status: string = "";

  constructor(
    private _projectService: ProjectService
  ){
    this.title = "Crear Proyecto";
    this.project = new Project('','','','',2023,'','');
  }

  onSubmit(form:any){

    this._projectService.saveProject(this.project).subscribe(
      response =>{
        if(response.project){
          this.status = 'success';
          form.reset();
        }else{
          this.status = 'failed';
        }
      },
      error => {
        alert(<any>error);
      }
    );
  }

}
