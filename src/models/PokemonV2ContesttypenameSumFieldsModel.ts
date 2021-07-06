import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypenameSumFieldsModelBase } from "./PokemonV2ContesttypenameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypenameSumFieldsModel */
export interface PokemonV2ContesttypenameSumFieldsModelType extends Instance<typeof PokemonV2ContesttypenameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypenameSumFieldsModel */
export { selectFromPokemonV2ContesttypenameSumFields, pokemonV2ContesttypenameSumFieldsModelPrimitives, PokemonV2ContesttypenameSumFieldsModelSelector } from "./PokemonV2ContesttypenameSumFieldsModel.base"

/**
 * PokemonV2ContesttypenameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ContesttypenameSumFieldsModel = PokemonV2ContesttypenameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
