import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupnameAvgFieldsModelBase } from "./PokemonV2EgggroupnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupnameAvgFieldsModel */
export interface PokemonV2EgggroupnameAvgFieldsModelType extends Instance<typeof PokemonV2EgggroupnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupnameAvgFieldsModel */
export { selectFromPokemonV2EgggroupnameAvgFields, pokemonV2EgggroupnameAvgFieldsModelPrimitives, PokemonV2EgggroupnameAvgFieldsModelSelector } from "./PokemonV2EgggroupnameAvgFieldsModel.base"

/**
 * PokemonV2EgggroupnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2EgggroupnameAvgFieldsModel = PokemonV2EgggroupnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
