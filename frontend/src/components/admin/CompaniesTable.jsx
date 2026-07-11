
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'

const CompaniesTable = () => {
  return (
    <div>
      <Table >
        <TableCaption>A list of your recent register companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className={"text-right"}>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWASgvoWGRcE5FRqDzQViYJ1jYMY7XtJk0y4bLmQ0-0A&s"/>
            </Avatar>
          </TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>26-12-2027</TableCell>
          <TableCell className={"text-right cursor-right"}>
            <Popover>
              <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
              <PopoverContent className={'w-32'}>
                <div className='flex items-center gap-2 w-fit cursor-pointer'>
                  <Edit2 className='w-4'/>
                  <span>Edit</span>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell>
        </TableBody>
      </Table>
    </div>
  )
}

export default CompaniesTable
