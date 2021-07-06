import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvalueMinFieldsModelBase } from "./PokemonV2EncounterconditionvalueMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvalueMinFieldsModel */
export interface PokemonV2EncounterconditionvalueMinFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvalueMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvalueMinFieldsModel */
export { selectFromPokemonV2EncounterconditionvalueMinFields, pokemonV2EncounterconditionvalueMinFieldsModelPrimitives, PokemonV2EncounterconditionvalueMinFieldsModelSelector } from "./PokemonV2EncounterconditionvalueMinFieldsModel.base"

/**
 * PokemonV2EncounterconditionvalueMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2EncounterconditionvalueMinFieldsModel = PokemonV2EncounterconditionvalueMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
