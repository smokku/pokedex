import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformtypeSumFieldsModelBase } from "./PokemonV2PokemonformtypeSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformtypeSumFieldsModel */
export interface PokemonV2PokemonformtypeSumFieldsModelType extends Instance<typeof PokemonV2PokemonformtypeSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformtypeSumFieldsModel */
export { selectFromPokemonV2PokemonformtypeSumFields, pokemonV2PokemonformtypeSumFieldsModelPrimitives, PokemonV2PokemonformtypeSumFieldsModelSelector } from "./PokemonV2PokemonformtypeSumFieldsModel.base"

/**
 * PokemonV2PokemonformtypeSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonformtypeSumFieldsModel = PokemonV2PokemonformtypeSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
