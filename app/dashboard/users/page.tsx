'use client';

import React from 'react';
import { DataTable } from '@/components/dashboard/DataTable';
import { MOCK_USERS } from '@/lib/mockData';

export default function UsersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">User Management</h1>
        <p className="text-gray-500 text-sm">Manage your users, roles, and permissions from a central place.</p>
      </div>

      <DataTable users={MOCK_USERS} />
    </div>
  );
}
