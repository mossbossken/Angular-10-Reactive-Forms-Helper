import { FormDefinitionOutput } from './../../../models/form-definition-output';
import { FormPublishService } from './../../services/form-publish.service';
import { Component, OnInit } from '@angular/core';
import { FormField } from 'src/app/models/form-field';


@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent implements OnInit {


  formFieldDefinitions: FormDefinitionOutput;
  constructor(
    private formPublishService: FormPublishService
  ) { }

  ngOnInit(): void {

    this.formPublishService.getFormFieldConvertedOutput().subscribe((value) =>{
      this.formFieldDefinitions = value;
      console.log('doing it');
    });

  }

}
