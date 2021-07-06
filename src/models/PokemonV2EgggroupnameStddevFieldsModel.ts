import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupnameStddevFieldsModelBase } from "./PokemonV2EgggroupnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupnameStddevFieldsModel */
export interface PokemonV2EgggroupnameStddevFieldsModelType extends Instance<typeof PokemonV2EgggroupnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupnameStddevFieldsModel */
export { selectFromPokemonV2EgggroupnameStddevFields, pokemonV2EgggroupnameStddevFieldsModelPrimitives, PokemonV2EgggroupnameStddevFieldsModelSelector } from "./PokemonV2EgggroupnameStddevFieldsModel.base"

/**
 * PokemonV2EgggroupnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2EgggroupnameStddevFieldsModel = PokemonV2EgggroupnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
