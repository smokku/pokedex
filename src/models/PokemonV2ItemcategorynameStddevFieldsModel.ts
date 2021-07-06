import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategorynameStddevFieldsModelBase } from "./PokemonV2ItemcategorynameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategorynameStddevFieldsModel */
export interface PokemonV2ItemcategorynameStddevFieldsModelType extends Instance<typeof PokemonV2ItemcategorynameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategorynameStddevFieldsModel */
export { selectFromPokemonV2ItemcategorynameStddevFields, pokemonV2ItemcategorynameStddevFieldsModelPrimitives, PokemonV2ItemcategorynameStddevFieldsModelSelector } from "./PokemonV2ItemcategorynameStddevFieldsModel.base"

/**
 * PokemonV2ItemcategorynameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemcategorynameStddevFieldsModel = PokemonV2ItemcategorynameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
