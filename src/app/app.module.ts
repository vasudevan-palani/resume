import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VerticalTimelineModule } from './angular-vertical-timeline';
import { ExperienceComponent } from './experience/experience.component';
import { ObjectiveComponent } from './objective/objective.component';
import { EducationComponent } from './education/education.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    ObjectiveComponent,
    EducationComponent,
    PersonalInfoComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    VerticalTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
