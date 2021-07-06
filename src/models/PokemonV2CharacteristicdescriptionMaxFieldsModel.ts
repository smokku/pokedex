import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicdescriptionMaxFieldsModelBase } from "./PokemonV2CharacteristicdescriptionMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicdescriptionMaxFieldsModel */
export interface PokemonV2CharacteristicdescriptionMaxFieldsModelType extends Instance<typeof PokemonV2CharacteristicdescriptionMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicdescriptionMaxFieldsModel */
export { selectFromPokemonV2CharacteristicdescriptionMaxFields, pokemonV2CharacteristicdescriptionMaxFieldsModelPrimitives, PokemonV2CharacteristicdescriptionMaxFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionMaxFieldsModel.base"

/**
 * PokemonV2CharacteristicdescriptionMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2CharacteristicdescriptionMaxFieldsModel = PokemonV2CharacteristicdescriptionMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
