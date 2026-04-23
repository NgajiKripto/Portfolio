'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { UploadCloud, FileText, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function JobMatchModal({ children }: { children: React.ReactNode }) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [lastPosition, setLastPosition] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        setFile(e.target.files[0]);
    }
  };
  
  const handleSubmit = () => {
    // Here you would call the Genkit flow
    console.log({
        file,
        lastPosition,
        experience,
        skills,
    });
    // For now, just log and close
    setFile(null);
    setLastPosition('');
    setExperience('');
    setSkills('');
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px] p-0 border-gray-200 rounded-lg">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl font-bold">Cek Kecocokan CV</DialogTitle>
          <DialogDescription>
            Unggah CV Anda dan isi beberapa detail untuk melihat seberapa cocok Anda dengan lowongan yang ada.
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 pb-6 grid gap-6">
            <div 
              className={cn(
                "relative flex flex-col items-center justify-center w-full p-8 border-2 border-dashed rounded-md transition-colors duration-200",
                isDragging ? "border-primary bg-primary/10" : "border-gray-200 dark:border-gray-700 hover:border-primary/50"
              )}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
                <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                />
                <label htmlFor="file-upload" className="cursor-pointer text-center">
                    <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold text-primary">Klik untuk unggah</span> atau seret dan lepas
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">PDF, DOC, DOCX (maks. 5MB)</p>
                </label>
            </div>
            
            {file && (
                <div className="flex items-center justify-between p-3 border rounded-md bg-muted/50">
                    <div className="flex items-center gap-3">
                        <FileText className="h-6 w-6 text-primary"/>
                        <span className="text-sm font-medium">{file.name}</span>
                    </div>
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setFile(null)}>
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            )}

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Atau isi manual jika CV gagal dibaca</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="lastPosition">Jabatan Terakhir</Label>
                    <Input id="lastPosition" placeholder="Contoh: Software Engineer" value={lastPosition} onChange={e => setLastPosition(e.target.value)} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="experience">Lama Pengalaman</Label>
                    <Input id="experience" placeholder="Contoh: 2 tahun" value={experience} onChange={e => setExperience(e.target.value)} />
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="skills">5 Skill Utama</Label>
                <Textarea id="skills" placeholder="Sebutkan 5 skill utama Anda, pisahkan dengan koma..." value={skills} onChange={e => setSkills(e.target.value)} />
            </div>
        </div>
        <DialogFooter className="p-6 pt-0 bg-muted/50 rounded-b-lg">
            <Button type="submit" size="lg" className="w-full" onClick={handleSubmit}>
                Cek Kecocokan Sekarang
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
