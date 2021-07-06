import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterAggregateModelBase } from "./PokemonV2EncounterAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterAggregateModel */
export interface PokemonV2EncounterAggregateModelType extends Instance<typeof PokemonV2EncounterAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterAggregateModel */
export { selectFromPokemonV2EncounterAggregate, pokemonV2EncounterAggregateModelPrimitives, PokemonV2EncounterAggregateModelSelector } from "./PokemonV2EncounterAggregateModel.base"

/**
 * PokemonV2EncounterAggregateModel
 *
 * aggregated selection of "pokemon_v2_encounter"
 */
export const PokemonV2EncounterAggregateModel = PokemonV2EncounterAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
