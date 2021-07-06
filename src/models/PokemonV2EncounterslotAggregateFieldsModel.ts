import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterslotAggregateFieldsModelBase } from "./PokemonV2EncounterslotAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterslotAggregateFieldsModel */
export interface PokemonV2EncounterslotAggregateFieldsModelType extends Instance<typeof PokemonV2EncounterslotAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterslotAggregateFieldsModel */
export { selectFromPokemonV2EncounterslotAggregateFields, pokemonV2EncounterslotAggregateFieldsModelPrimitives, PokemonV2EncounterslotAggregateFieldsModelSelector } from "./PokemonV2EncounterslotAggregateFieldsModel.base"

/**
 * PokemonV2EncounterslotAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_encounterslot"
 */
export const PokemonV2EncounterslotAggregateFieldsModel = PokemonV2EncounterslotAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
