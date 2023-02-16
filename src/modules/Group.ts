export default class Group {
  constructor(public readonly id: number, public name: string) {}
}

export const defaultGroups = {
    users: 'users',
    admin: 'admin'

}
// detalle de implementación
const managerUser = () => {}