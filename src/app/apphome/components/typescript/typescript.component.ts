import { FormDefinitionOutput } from './../../../models/form-definition-output';
import { FormPublishService } from './../../services/form-publish.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {

  formFieldDefinitions: FormDefinitionOutput;

  constructor(private formPublishService: FormPublishService) { }

  ngOnInit(): void {
    this.formPublishService.getFormFieldConvertedOutput().subscribe((value) =>{
      this.formFieldDefinitions = value;
    });
  }

}
