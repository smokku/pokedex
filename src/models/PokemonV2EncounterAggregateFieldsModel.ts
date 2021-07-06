import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterAggregateFieldsModelBase } from "./PokemonV2EncounterAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterAggregateFieldsModel */
export interface PokemonV2EncounterAggregateFieldsModelType extends Instance<typeof PokemonV2EncounterAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterAggregateFieldsModel */
export { selectFromPokemonV2EncounterAggregateFields, pokemonV2EncounterAggregateFieldsModelPrimitives, PokemonV2EncounterAggregateFieldsModelSelector } from "./PokemonV2EncounterAggregateFieldsModel.base"

/**
 * PokemonV2EncounterAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_encounter"
 */
export const PokemonV2EncounterAggregateFieldsModel = PokemonV2EncounterAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
