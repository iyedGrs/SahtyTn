import React from "react";

export type AuthDebugStatus = "info" | "success" | "error";

export interface AuthDebugEvent {
  id: number;
  timestamp: string;
  step: string;
  status: AuthDebugStatus;
  payload: unknown;
}

interface AuthDebugPanelProps {
  events: AuthDebugEvent[];
  onClear: () => void;
}

const statusClass: Record<AuthDebugStatus, string> = {
  info: "bg-slate-100 text-slate-700",
  success: "bg-emerald-100 text-emerald-700",
  error: "bg-rose-100 text-rose-700",
};

const AuthDebugPanel: React.FC<AuthDebugPanelProps> = ({ events, onClear }) => {
  return (
    <details open className="mt-6 w-full rounded-lg border border-slate-300 bg-slate-50 p-3">
      <summary className="cursor-pointer font-semibold text-slate-700">
        Auth Debug Panel ({events.length})
      </summary>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-xs text-slate-500">Latest auth request/response events</p>
        <button
          type="button"
          onClick={onClear}
          className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 hover:bg-slate-100"
        >
          Clear
        </button>
      </div>

      <div className="mt-3 max-h-72 space-y-3 overflow-auto rounded-md border border-slate-200 bg-white p-3">
        {events.length === 0 ? (
          <p className="text-sm text-slate-500">No auth events yet.</p>
        ) : (
          events
            .slice()
            .reverse()
            .map((event) => (
              <div key={event.id} className="rounded-md border border-slate-200 p-2">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xs text-slate-500">{event.timestamp}</span>
                  <span
                    className={`rounded px-2 py-0.5 text-xs font-medium ${statusClass[event.status]}`}
                  >
                    {event.status.toUpperCase()}
                  </span>
                  <span className="text-sm font-medium text-slate-700">{event.step}</span>
                </div>
                <pre className="overflow-auto rounded bg-slate-900 p-2 text-xs text-slate-100">
{JSON.stringify(event.payload, null, 2)}
                </pre>
              </div>
            ))
        )}
      </div>
    </details>
  );
};

export default AuthDebugPanel;
