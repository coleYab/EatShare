import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import ShowRecepie from '@/components/recepie/show'
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Recipe Details',
        href: '/recepie',
    },
];

export default function Show({ recepie } : { recepie : any}) {
    console.log(recepie)
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <ShowRecepie recipe={recepie} />
            </div>
        </AppLayout>
    );
}
