import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupnameMinFieldsModelBase } from "./PokemonV2EgggroupnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupnameMinFieldsModel */
export interface PokemonV2EgggroupnameMinFieldsModelType extends Instance<typeof PokemonV2EgggroupnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupnameMinFieldsModel */
export { selectFromPokemonV2EgggroupnameMinFields, pokemonV2EgggroupnameMinFieldsModelPrimitives, PokemonV2EgggroupnameMinFieldsModelSelector } from "./PokemonV2EgggroupnameMinFieldsModel.base"

/**
 * PokemonV2EgggroupnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2EgggroupnameMinFieldsModel = PokemonV2EgggroupnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
