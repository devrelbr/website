import * as dateFns from 'date-fns';
import { ptBR } from 'date-fns/locale';
import type { Locale } from 'date-fns';

export function format(
  date: string,
  locale: Locale = ptBR,
): string {
  return dateFns.format(
    new Date(date),
    'dd MMM yyyy',
    { locale },
  );
}
