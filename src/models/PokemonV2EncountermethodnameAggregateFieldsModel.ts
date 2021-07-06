import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodnameAggregateFieldsModelBase } from "./PokemonV2EncountermethodnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodnameAggregateFieldsModel */
export interface PokemonV2EncountermethodnameAggregateFieldsModelType extends Instance<typeof PokemonV2EncountermethodnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodnameAggregateFieldsModel */
export { selectFromPokemonV2EncountermethodnameAggregateFields, pokemonV2EncountermethodnameAggregateFieldsModelPrimitives, PokemonV2EncountermethodnameAggregateFieldsModelSelector } from "./PokemonV2EncountermethodnameAggregateFieldsModel.base"

/**
 * PokemonV2EncountermethodnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_encountermethodname"
 */
export const PokemonV2EncountermethodnameAggregateFieldsModel = PokemonV2EncountermethodnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
