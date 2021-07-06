import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicMaxFieldsModelBase } from "./PokemonV2CharacteristicMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicMaxFieldsModel */
export interface PokemonV2CharacteristicMaxFieldsModelType extends Instance<typeof PokemonV2CharacteristicMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicMaxFieldsModel */
export { selectFromPokemonV2CharacteristicMaxFields, pokemonV2CharacteristicMaxFieldsModelPrimitives, PokemonV2CharacteristicMaxFieldsModelSelector } from "./PokemonV2CharacteristicMaxFieldsModel.base"

/**
 * PokemonV2CharacteristicMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2CharacteristicMaxFieldsModel = PokemonV2CharacteristicMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
