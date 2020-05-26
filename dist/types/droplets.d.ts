export interface DropletCreationRequest {
    name: string;
    region: string;
    size: string;
    image: string | number;
    ssh_keys: number[];
    backups: boolean;
    ipv6: boolean,
    private_networking: boolean;
    user_data: any;
    monitoring: boolean;
    volumes: string[];
    tags: string;
    vpc_uuid?: string;
}
