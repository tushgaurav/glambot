import { useEffect, useState } from "react"
import { apiFetch } from "@/lib/api"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BookOpenIcon, CameraIcon, CalendarIcon } from "lucide-react"

export default function Dashboard() {
  const [stats, setStats] = useState({ bookings: 0, shotRequests: 0, events: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const [bookingsData, shotRequestsData, eventsData] = await Promise.all([
          apiFetch("/admin/bookings"),
          apiFetch("/admin/shot-requests"),
          apiFetch("/admin/events"),
        ])
        setStats({
          bookings: bookingsData.bookings?.length || 0,
          shotRequests: shotRequestsData.requests?.length || 0,
          events: eventsData.events?.length || 0,
        })
      } catch {
        // Stats will show 0
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="rounded-md bg-primary/10 p-2">
              <BookOpenIcon className="size-6 text-primary" />
            </div>
            <div>
              <CardDescription>Total Bookings</CardDescription>
              <CardTitle className="text-3xl tabular-nums">
                {loading ? "—" : stats.bookings}
              </CardTitle>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="rounded-md bg-primary/10 p-2">
              <CameraIcon className="size-6 text-primary" />
            </div>
            <div>
              <CardDescription>Shot Requests</CardDescription>
              <CardTitle className="text-3xl tabular-nums">
                {loading ? "—" : stats.shotRequests}
              </CardTitle>
            </div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="rounded-md bg-primary/10 p-2">
              <CalendarIcon className="size-6 text-primary" />
            </div>
            <div>
              <CardDescription>Total Events</CardDescription>
              <CardTitle className="text-3xl tabular-nums">
                {loading ? "—" : stats.events}
              </CardTitle>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
