import { Instance } from "mobx-state-tree"
import { PokemonV2MachineAggregateModelBase } from "./PokemonV2MachineAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MachineAggregateModel */
export interface PokemonV2MachineAggregateModelType extends Instance<typeof PokemonV2MachineAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MachineAggregateModel */
export { selectFromPokemonV2MachineAggregate, pokemonV2MachineAggregateModelPrimitives, PokemonV2MachineAggregateModelSelector } from "./PokemonV2MachineAggregateModel.base"

/**
 * PokemonV2MachineAggregateModel
 *
 * aggregated selection of "pokemon_v2_machine"
 */
export const PokemonV2MachineAggregateModel = PokemonV2MachineAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
