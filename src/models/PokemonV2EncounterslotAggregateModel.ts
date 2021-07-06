import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterslotAggregateModelBase } from "./PokemonV2EncounterslotAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterslotAggregateModel */
export interface PokemonV2EncounterslotAggregateModelType extends Instance<typeof PokemonV2EncounterslotAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterslotAggregateModel */
export { selectFromPokemonV2EncounterslotAggregate, pokemonV2EncounterslotAggregateModelPrimitives, PokemonV2EncounterslotAggregateModelSelector } from "./PokemonV2EncounterslotAggregateModel.base"

/**
 * PokemonV2EncounterslotAggregateModel
 *
 * aggregated selection of "pokemon_v2_encounterslot"
 */
export const PokemonV2EncounterslotAggregateModel = PokemonV2EncounterslotAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
