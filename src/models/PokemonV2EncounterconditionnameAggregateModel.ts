import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionnameAggregateModelBase } from "./PokemonV2EncounterconditionnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionnameAggregateModel */
export interface PokemonV2EncounterconditionnameAggregateModelType extends Instance<typeof PokemonV2EncounterconditionnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionnameAggregateModel */
export { selectFromPokemonV2EncounterconditionnameAggregate, pokemonV2EncounterconditionnameAggregateModelPrimitives, PokemonV2EncounterconditionnameAggregateModelSelector } from "./PokemonV2EncounterconditionnameAggregateModel.base"

/**
 * PokemonV2EncounterconditionnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_encounterconditionname"
 */
export const PokemonV2EncounterconditionnameAggregateModel = PokemonV2EncounterconditionnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
