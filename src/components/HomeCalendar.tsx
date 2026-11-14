import { useState } from "react";
import { Button } from "@/components/ui/button";

const days = [
  { label: "Sex", date: "20.11", time: "SEX 19:00", title: "O Cume Branco", type: "Recital", status: "Esgotado" },
  { label: "Sáb", date: "21.11", time: "SÁB 19:00", title: "O Cume Branco", type: "Recital", status: "Esgotado" },
  { label: "Dom", date: "22.11", time: "DOM 19:00", title: "O Cume Branco", type: "Recital", status: "Esgotado" },
] as const;

export function HomeCalendar() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = days[selectedIndex] ?? days[0];

  return (
    <div className="flex min-h-72 min-w-0 bg-muted p-5 sm:p-9" aria-label="Calendário de poesia">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex justify-between border-b border-foreground pb-2" role="group" aria-label="Dias da agenda">
          {days.map((day, index) => (
            <Button
              key={day.date}
              variant="ghost"
              aria-label={`${day.label}, ${day.date}`}
              aria-pressed={selectedIndex === index}
              onMouseEnter={() => setSelectedIndex(index)}
              onFocus={() => setSelectedIndex(index)}
              onClick={() => setSelectedIndex(index)}
              className={`h-auto rounded-none bg-transparent p-0 text-3xl font-normal hover:bg-transparent hover:text-foreground ${selectedIndex === index ? "text-foreground" : "text-muted-foreground"}`}
            >
              {day.label}
            </Button>
          ))}
        </div>
        <div className="mt-auto grid grid-cols-[minmax(0,1fr)_auto] gap-2 border-b border-foreground pb-2" aria-live="polite" aria-atomic="true">
          <div className="min-w-0"><div className="text-xl">{selected.title}</div><div>{selected.type}</div></div>
          <div className="shrink-0 text-right"><div className="text-xl">{selected.time}</div><div>{selected.status}</div></div>
          <span className="sr-only">{selected.date}</span>
        </div>
        <a href="#agenda" className="mt-4 flex items-center gap-3"><span className="h-4 w-5 shrink-0 bg-foreground [clip-path:polygon(0_0,70%_0,100%_50%,70%_100%,0_100%)]" />Ver agenda completa</a>
      </div>
      <div className="ml-3 shrink-0 text-5xl leading-none min-[400px]:text-7xl sm:ml-6 sm:text-[9rem] [writing-mode:vertical-rl]" aria-hidden="true">{selected.date}</div>
    </div>
  );
}