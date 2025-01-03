import React from 'react';
import { Button } from "@/components/ui/button"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { BookOpen, Home, BookmarkPlus, DollarSign, Calendar, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-100">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center p-4">
              <BookOpen className="h-8 w-8 text-purple-600 mr-2" />
              <Link to="/" className="text-2xl font-bold text-gray-900">Coursify</Link>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Home className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <BookOpen className="mr-2 h-4 w-4" />
                      <span>My Courses</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <BookmarkPlus className="mr-2 h-4 w-4" />
                      <span>Create Course</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <DollarSign className="mr-2 h-4 w-4" />
                      <span>Sales</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Meetings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex flex-col flex-1">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
              <SidebarTrigger />
              <div className="flex items-center">
                <Button variant="ghost" className="mr-2">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
                <img
                  className="h-8 w-8 rounded-full"
                  src="/placeholder.svg?height=32&width=32"
                  alt="User avatar"
                />
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-4">
            Home
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}