import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupnameMaxFieldsModelBase } from "./PokemonV2EgggroupnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupnameMaxFieldsModel */
export interface PokemonV2EgggroupnameMaxFieldsModelType extends Instance<typeof PokemonV2EgggroupnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupnameMaxFieldsModel */
export { selectFromPokemonV2EgggroupnameMaxFields, pokemonV2EgggroupnameMaxFieldsModelPrimitives, PokemonV2EgggroupnameMaxFieldsModelSelector } from "./PokemonV2EgggroupnameMaxFieldsModel.base"

/**
 * PokemonV2EgggroupnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2EgggroupnameMaxFieldsModel = PokemonV2EgggroupnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
