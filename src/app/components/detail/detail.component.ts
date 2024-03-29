import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params  } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  public url: string;
  public project: Project;
  public confirm: boolean;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = global.url;
    this.confirm = false;
    this.project = new Project('', '', '', '', 2023, '', '');
    
   }

   ngOnInit(){
    this._route.params.subscribe(params =>{
      let id = params['id'];

      this.getProject(id);
    });
   }

   getProject(id:any){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      }, error => {
        console.log(error);
      }
    )
   }

   setConfirm(confirm:any){
    this.confirm = confirm;
  }

  deleteProject(id: any) {
    this._projectService.deleteProject(id).subscribe(
      response => {
        if (response.project) {
          setTimeout(() => {
            this._router.navigate(['/proyectos']);
          }, 1000); // Redirige después de un segundo
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
