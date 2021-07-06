import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodnameAggregateModelBase } from "./PokemonV2EncountermethodnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodnameAggregateModel */
export interface PokemonV2EncountermethodnameAggregateModelType extends Instance<typeof PokemonV2EncountermethodnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodnameAggregateModel */
export { selectFromPokemonV2EncountermethodnameAggregate, pokemonV2EncountermethodnameAggregateModelPrimitives, PokemonV2EncountermethodnameAggregateModelSelector } from "./PokemonV2EncountermethodnameAggregateModel.base"

/**
 * PokemonV2EncountermethodnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_encountermethodname"
 */
export const PokemonV2EncountermethodnameAggregateModel = PokemonV2EncountermethodnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
