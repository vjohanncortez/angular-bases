import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number):void {
  //   this.onDelete.emit(index);
  // }

  onDeleteCharacter(id?: string):void {
    if ( !id ) return;

    this.onDelete.emit(id);
  }
 }
