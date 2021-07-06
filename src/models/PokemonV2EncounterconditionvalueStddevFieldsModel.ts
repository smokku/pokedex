import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvalueStddevFieldsModelBase } from "./PokemonV2EncounterconditionvalueStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvalueStddevFieldsModel */
export interface PokemonV2EncounterconditionvalueStddevFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvalueStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvalueStddevFieldsModel */
export { selectFromPokemonV2EncounterconditionvalueStddevFields, pokemonV2EncounterconditionvalueStddevFieldsModelPrimitives, PokemonV2EncounterconditionvalueStddevFieldsModelSelector } from "./PokemonV2EncounterconditionvalueStddevFieldsModel.base"

/**
 * PokemonV2EncounterconditionvalueStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2EncounterconditionvalueStddevFieldsModel = PokemonV2EncounterconditionvalueStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
