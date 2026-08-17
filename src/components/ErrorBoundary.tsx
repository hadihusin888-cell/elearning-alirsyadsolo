import React, { ErrorInfo, ReactNode } from 'react';
import { RefreshCw, AlertTriangle, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  public handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  public handleReload = () => {
    try {
      window.location.reload();
    } catch {
      this.handleReset();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] w-full p-6 flex flex-col items-center justify-center text-center bg-slate-50 rounded-2xl border border-slate-200/80 my-4 font-sans">
          <div className="w-14 h-14 bg-amber-50 rounded-2xl border border-amber-200 flex items-center justify-center text-amber-600 mb-4 shadow-sm">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-black text-slate-900 tracking-tight font-serif-heading">
            {this.props.fallbackTitle || 'Terjadi Kendala Tampilan'}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mt-1.5 leading-relaxed">
            Halaman mengalami kendala saat memuat menu. Silakan klik tombol di bawah untuk menyegarkan tampilan tanpa kehilangan sesi Anda.
          </p>

          <div className="flex flex-wrap gap-2.5 mt-6 justify-center">
            <button
              type="button"
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" /> Muat Ulang Menu
            </button>
            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs transition-all cursor-pointer"
            >
              <Home className="w-4 h-4" /> Segarkan Halaman
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
