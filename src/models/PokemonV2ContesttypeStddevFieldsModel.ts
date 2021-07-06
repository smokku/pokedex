import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypeStddevFieldsModelBase } from "./PokemonV2ContesttypeStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypeStddevFieldsModel */
export interface PokemonV2ContesttypeStddevFieldsModelType extends Instance<typeof PokemonV2ContesttypeStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypeStddevFieldsModel */
export { selectFromPokemonV2ContesttypeStddevFields, pokemonV2ContesttypeStddevFieldsModelPrimitives, PokemonV2ContesttypeStddevFieldsModelSelector } from "./PokemonV2ContesttypeStddevFieldsModel.base"

/**
 * PokemonV2ContesttypeStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ContesttypeStddevFieldsModel = PokemonV2ContesttypeStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
