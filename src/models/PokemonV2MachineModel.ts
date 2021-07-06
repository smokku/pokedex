import { Instance } from "mobx-state-tree"
import { PokemonV2MachineModelBase } from "./PokemonV2MachineModel.base"

/* The TypeScript type of an instance of PokemonV2MachineModel */
export interface PokemonV2MachineModelType extends Instance<typeof PokemonV2MachineModel.Type> {}

/* A graphql query fragment builders for PokemonV2MachineModel */
export { selectFromPokemonV2Machine, pokemonV2MachineModelPrimitives, PokemonV2MachineModelSelector } from "./PokemonV2MachineModel.base"

/**
 * PokemonV2MachineModel
 *
 * columns and relationships of "pokemon_v2_machine"
 */
export const PokemonV2MachineModel = PokemonV2MachineModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
