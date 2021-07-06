import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformnameSumFieldsModelBase } from "./PokemonV2PokemonformnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformnameSumFieldsModel */
export interface PokemonV2PokemonformnameSumFieldsModelType extends Instance<typeof PokemonV2PokemonformnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformnameSumFieldsModel */
export { selectFromPokemonV2PokemonformnameSumFields, pokemonV2PokemonformnameSumFieldsModelPrimitives, PokemonV2PokemonformnameSumFieldsModelSelector } from "./PokemonV2PokemonformnameSumFieldsModel.base"

/**
 * PokemonV2PokemonformnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonformnameSumFieldsModel = PokemonV2PokemonformnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
