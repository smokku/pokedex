import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterslotMaxFieldsModelBase } from "./PokemonV2EncounterslotMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterslotMaxFieldsModel */
export interface PokemonV2EncounterslotMaxFieldsModelType extends Instance<typeof PokemonV2EncounterslotMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterslotMaxFieldsModel */
export { selectFromPokemonV2EncounterslotMaxFields, pokemonV2EncounterslotMaxFieldsModelPrimitives, PokemonV2EncounterslotMaxFieldsModelSelector } from "./PokemonV2EncounterslotMaxFieldsModel.base"

/**
 * PokemonV2EncounterslotMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2EncounterslotMaxFieldsModel = PokemonV2EncounterslotMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
