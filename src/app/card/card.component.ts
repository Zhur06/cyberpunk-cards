import { Component, InputSignal, Signal, WritableSignal, computed, input, signal } from '@angular/core';

import { ICard } from './icard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  card: InputSignal<ICard> = input.required<ICard>();

  protected m_focused: WritableSignal<boolean> = signal<boolean>(false)

  protected m_focusOnCard(): void {
    this.m_focused.set(true);
  }

  protected m_focusedOffCard(): void {
    this.m_focused.set(false);
  }

  protected cardLabel: Signal<string> = computed<string>(() => `EMP.${this.card().name.replaceAll(' ', '').toUpperCase()}`);
}
