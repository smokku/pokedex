import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicMinFieldsModelBase } from "./PokemonV2CharacteristicMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicMinFieldsModel */
export interface PokemonV2CharacteristicMinFieldsModelType extends Instance<typeof PokemonV2CharacteristicMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicMinFieldsModel */
export { selectFromPokemonV2CharacteristicMinFields, pokemonV2CharacteristicMinFieldsModelPrimitives, PokemonV2CharacteristicMinFieldsModelSelector } from "./PokemonV2CharacteristicMinFieldsModel.base"

/**
 * PokemonV2CharacteristicMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2CharacteristicMinFieldsModel = PokemonV2CharacteristicMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
