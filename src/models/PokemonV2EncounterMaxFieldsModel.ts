import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterMaxFieldsModelBase } from "./PokemonV2EncounterMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterMaxFieldsModel */
export interface PokemonV2EncounterMaxFieldsModelType extends Instance<typeof PokemonV2EncounterMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterMaxFieldsModel */
export { selectFromPokemonV2EncounterMaxFields, pokemonV2EncounterMaxFieldsModelPrimitives, PokemonV2EncounterMaxFieldsModelSelector } from "./PokemonV2EncounterMaxFieldsModel.base"

/**
 * PokemonV2EncounterMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2EncounterMaxFieldsModel = PokemonV2EncounterMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
