import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodnameMinFieldsModelBase } from "./PokemonV2EncountermethodnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodnameMinFieldsModel */
export interface PokemonV2EncountermethodnameMinFieldsModelType extends Instance<typeof PokemonV2EncountermethodnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodnameMinFieldsModel */
export { selectFromPokemonV2EncountermethodnameMinFields, pokemonV2EncountermethodnameMinFieldsModelPrimitives, PokemonV2EncountermethodnameMinFieldsModelSelector } from "./PokemonV2EncountermethodnameMinFieldsModel.base"

/**
 * PokemonV2EncountermethodnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2EncountermethodnameMinFieldsModel = PokemonV2EncountermethodnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
