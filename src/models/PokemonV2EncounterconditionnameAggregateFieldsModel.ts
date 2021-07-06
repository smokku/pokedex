import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionnameAggregateFieldsModelBase } from "./PokemonV2EncounterconditionnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionnameAggregateFieldsModel */
export interface PokemonV2EncounterconditionnameAggregateFieldsModelType extends Instance<typeof PokemonV2EncounterconditionnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionnameAggregateFieldsModel */
export { selectFromPokemonV2EncounterconditionnameAggregateFields, pokemonV2EncounterconditionnameAggregateFieldsModelPrimitives, PokemonV2EncounterconditionnameAggregateFieldsModelSelector } from "./PokemonV2EncounterconditionnameAggregateFieldsModel.base"

/**
 * PokemonV2EncounterconditionnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_encounterconditionname"
 */
export const PokemonV2EncounterconditionnameAggregateFieldsModel = PokemonV2EncounterconditionnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
